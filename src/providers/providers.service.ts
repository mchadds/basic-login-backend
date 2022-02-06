import { Injectable } from '@nestjs/common';
import { Provider } from './entities/provider.entity';
import { CreateProviderDto } from './dto/create-provider.dto';

@Injectable()
export class ProvidersService {
    // static array of providers
    // utilized for querying since database will not be used in this project
    private providers: Provider[] = [
        { id: 1, name: 'Progressive' },
        { id: 2,  name: 'Liberty Mutual' }
    ];

    // return all providers
    findAll(): Provider[] {
        return this.providers;
    }

    // return specific provider based on id
    findById(providerId: number): Provider {
        return this.providers.find(provider => provider.id === providerId);  
    }
    
    //EXTENDED FUNCTIONALITY
    // create a new provider
    createProvider(createProviderDto: CreateProviderDto): Provider {
        const newProvider = { id: Date.now(), ...createProviderDto };
        this.providers.push(newProvider);
        return newProvider;
    }
}

