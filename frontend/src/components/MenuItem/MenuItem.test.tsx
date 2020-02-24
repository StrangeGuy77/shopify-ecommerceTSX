import * as React from 'react';
import * as renderer from 'react-test-renderer';
import { sections } from "../../utils/DirectoryComponentData";
import MenuItem from './MenuItem';

describe('Menu item will be tested againts 12 contradictory and succesful cases', () => {
    it("MenuItem load all items from within 'sections' hardcoded object", () => {
        const test = sections.map(item => {
            return renderer.create(<MenuItem {...item} />);
        });
        console.log(test);
        expect(test).toBeTruthy();
    });
});