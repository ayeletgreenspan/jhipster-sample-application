import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
    imports: [
        RouterModule.forChild([
            {
                path: 'blog',
                loadChildren: './blog/blog.module#JhipsterSampleApplicationBlogModule'
            },
            {
                path: 'entry',
                loadChildren: './entry/entry.module#JhipsterSampleApplicationEntryModule'
            },
            {
                path: 'tag',
                loadChildren: './tag/tag.module#JhipsterSampleApplicationTagModule'
            }
            /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
        ])
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterSampleApplicationEntityModule {}
