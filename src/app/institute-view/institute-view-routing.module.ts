import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { InstituteViewHeaderComponent } from './institutecomponents/view-header/view-header.component';
import { InstituteViewFooterComponent } from './institutecomponents/view-footer/view-footer.component';
import { AboutComponent } from './about/about.component';
import { BatchComponent } from './batch/batch.component';
import { GalleryComponent } from './gallery/gallery.component';
import { CourseDetailsComponent } from './course-details/course-details.component';
import { BatchDetailsComponent } from './batch-details/batch-details.component';
import { CourseViewComponent } from './course-view/course-view.component';
import { EnquiryViewComponent } from './enquiry-view/enquiry-view.component';
import { InstituteViewComponent } from './institute-view.component';


const routes: Routes = [
  {
    path: '',
    component: InstituteViewComponent,
    children: [
      {
        path: '',
        redirectTo: 'about'
      },
      {
        path: 'about',
        component: AboutComponent
      },
      {
        path: 'course',
        component: CourseViewComponent
      },
      {
        path: 'course/:courseName',
        component: CourseDetailsComponent
      },
      {
        path: 'batch',
        component: BatchComponent
      },
      {
        path: 'batch/:batchName',
        component: BatchDetailsComponent
      },
      {
        path: 'batch/:courseName',
        component: BatchComponent
      },
      {
        path: 'gallery',
        component: GalleryComponent
      },
      {
        path: 'enquiry',
        component: EnquiryViewComponent
      }

    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class InstituteViewRoutingModule { }
export const InstituteViewComponents = [
  InstituteViewComponent,
  AboutComponent,
  CourseViewComponent, 
  CourseDetailsComponent, 
  BatchComponent, 
  BatchDetailsComponent,
  GalleryComponent, 
  EnquiryViewComponent,
  InstituteViewHeaderComponent,
  InstituteViewFooterComponent
];
