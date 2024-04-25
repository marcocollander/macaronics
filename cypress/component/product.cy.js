import Product from '../../src/components/Product.jsx';
import { mount } from 'cypress/react18';

const mockProduct = {
    image: [
        {
            _key: 'ba6786ee0e81',
            _type: 'image',
            asset: {
                _ref: 'image-812a8575cab31a81ea8352e913d173c9244151b7-456x456-jpg',
            },
        },
    ],

    name: 'caramel-apple',
    slug: {
        current: 'caramel-apple',
    },
    price: 9.0,
    description: '',
    sku: 'MACM001',
};

describe('<Product />', () => {
    it('should render and display expected content', () => {
        // Mount the DemoBanner component
        cy.mount(<Product product={mockProduct} />);
        cy.get('div').should('be.visible');

        // Validate that the correct text is displayed in the Product card
        cy.get('p.product-name:nth-child(2)').should(
            'have.text',
            mockProduct.name,
        );
    });
});
