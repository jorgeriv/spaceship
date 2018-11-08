import { ForceFieldModule } from './force-field.module';

describe('ForceFieldModule', () => {
  let forceFieldModule: ForceFieldModule;

  beforeEach(() => {
    forceFieldModule = new ForceFieldModule();
  });

  it('should create an instance', () => {
    expect(forceFieldModule).toBeTruthy();
  });
});
