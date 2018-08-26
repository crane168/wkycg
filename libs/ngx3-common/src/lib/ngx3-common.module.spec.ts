import { async, TestBed } from '@angular/core/testing';
import { Ngx3CommonModule } from './ngx3-common.module';

describe('Ngx3CommonModule', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [Ngx3CommonModule]
    }).compileComponents();
  }));

  it('should create', () => {
    expect(Ngx3CommonModule).toBeDefined();
  });
});
