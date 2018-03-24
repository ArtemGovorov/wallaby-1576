import {createCqlFromFiltersWithAnd} from "../../../utils/cqlFilterHelper";

jest.mock("../../../utils/cqlFilterHelper");

it('works', () => {
    const createCqlFromFiltersWithAndMock: jest.MockInstance<any> = createCqlFromFiltersWithAnd as any;
    createCqlFromFiltersWithAndMock.mockReturnValue("highlight");
});
