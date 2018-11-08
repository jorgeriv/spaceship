import { PlasmaGeneratorModule } from './plasma-generator.module';

describe('PlasmaGeneratorModule', () => {
  let plasmaGeneratorModule: PlasmaGeneratorModule;

  beforeEach(() => {
    plasmaGeneratorModule = new PlasmaGeneratorModule();
  });

  it('should create an instance', () => {
    expect(plasmaGeneratorModule).toBeTruthy();
  });
});
