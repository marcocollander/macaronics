import DemoBanner from '../../src/components/DemoBanner';
import { mount } from 'cypress/react18';

const mockText =
    'This is a demo store - no orders will be accepted or delivered';

describe('<DemoBanner />', () => {
    it('should render and display expected content', () => {
        cy.mount(<DemoBanner />);

        cy.get('div.demo-banner-container > span')
            .should('be.visible')
            .should('have.text', mockText);
    });
});
