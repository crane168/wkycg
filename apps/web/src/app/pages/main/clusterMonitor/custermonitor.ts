import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import {PageComponent} from '../../../common/page.component';
// import {Context} from '../../../service/context.service';
// import {PageTitleService} from '../../../service/page-title.service';
import { PageComponent, Context, PageTitleService } from '@wkycg/ngx3-common';
@Component({
  selector: 'monitor',
  templateUrl: './custermonitor.html'
})
export class Custermonitor extends PageComponent {
  constructor(
    protected context: Context,
    protected route: ActivatedRoute,
    protected router: Router,
    protected pageTitleService: PageTitleService
  ) {
    super(context, route, router);
  }
  protected onPageInit() {
    this.pageTitleService.setTitle('header.Cluster');
  }

  protected onPageRender() {}
}
