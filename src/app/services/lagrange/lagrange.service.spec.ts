import {inject, TestBed} from '@angular/core/testing';

import {LagrangeService} from './lagrange.service';

describe('LagrangeService', () => {
    beforeEach(() => {
        TestBed.configureTestingModule({
            providers: [LagrangeService]
        });
    });

    it('should be created', inject([LagrangeService], (service: LagrangeService) => {
        expect(service).toBeTruthy();
    }));

    it('should be 2 for x = 1 for points (0,1)(2,3)', inject([LagrangeService], (service: LagrangeService) => {
        const points = [
            {
                x: 0,
                y: 1
            },
            {
                x: 2,
                y: 3
            }
        ];
        const result = service.computeEquation(points, 1);
        expect(result).toBe(2);
    }));
});
