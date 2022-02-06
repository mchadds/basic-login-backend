
import { Body, Controller, Get, NotFoundException, Param, ParseIntPipe, Post, Query } from '@nestjs/common';
import { ApiBadRequestResponse, ApiCreatedResponse, ApiNotFoundResponse, ApiOkResponse, ApiQuery, ApiTags } from '@nestjs/swagger';
import { Provider } from './entities/provider.entity';
import { ProvidersService } from './providers.service';
import { CreateProviderDto } from './dto/create-provider.dto';
// tag categorizes api calls in the swagger docs
@ApiTags('providers')
@Controller('providers')
export class ProvidersController {
    constructor(private providersService: ProvidersService) {}

    // clarify the OK response from the API
    @ApiOkResponse({type: Provider, isArray: true})
    // get all users
    @Get()
    getUsers(): Provider[] {
        return this.providersService.findAll();
    }

    // clarify the OK response from the API
    @ApiOkResponse({type: Provider})
    @ApiNotFoundResponse()
    // EXTENDED FUNCTIONALITY
    // get specific user based off id
    @Get(':id')
    getUserById(@Param('id', ParseIntPipe) id: number): Provider {
        // retrieve user with specific id
        const user = this.providersService.findById(Number(id));
        
        if (!user) {
            throw new NotFoundException();
        }

        return user;
    }

    // EXTENDED FUNCTIONALITY
    // tag indicates the response type for the swagger docs
    @ApiCreatedResponse({type: Provider})
    @ApiBadRequestResponse()
    // post call for creating a user
    @Post()
    createProvider(@Body() body: CreateProviderDto): Provider {
        return this.providersService.createProvider(body);
    }
}
