import { TestBed } from '@angular/core/testing';



describe('ComponentePadreService', () => {
  let service: ComponentePadreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentePadreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
