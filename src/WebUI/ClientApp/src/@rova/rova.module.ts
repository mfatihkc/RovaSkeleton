import { ModuleWithProviders, NgModule, Optional, SkipSelf } from '@angular/core';

import { FUSE_CONFIG } from '@rova/services/config.service';

@NgModule()
export class RovaModule
{
    constructor(@Optional() @SkipSelf() parentModule: RovaModule)
    {
        if ( parentModule )
        {
            throw new Error('RovaModule is already loaded. Import it in the AppModule only!');
        }
    }

    static forRoot(config): ModuleWithProviders<RovaModule>
    {
        return {
            ngModule : RovaModule,
            providers: [
                {
                    provide : FUSE_CONFIG,
                    useValue: config
                }
            ]
        };
    }
}
