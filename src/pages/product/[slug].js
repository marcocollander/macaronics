import React, { useState } from 'react';
import {
    AiOutlineMinus,
    AiOutlinePlus,
    AiFillStar,
    AiOutlineStar,
} from 'react-icons/ai';
import { Info } from '../../components';

import { client, urlFor } from '@/lib/client';
import Product from '@/components/Product';
import { useStateContext } from '@/context/StateContext';

const ProductDetails = ({ product, products }) => {
    const { image, name, details, price, sku, ingredients, weight, delivery } =
        product;
    const [index, setIndex] = useState(0);
    const { decQty, incQty, qty, onAdd, setShowCart } = useStateContext();

    const handleByNow = () => {
        onAdd(product, qty);
        setShowCart(true);
    };

    return (
        <div>
            <div className='product-detail-container'>
                <div>
                    <div className='image-container'>
                        <img
                            src={urlFor(image && image[index])}
                            className='product-detail-image'
                            alt={'Product detail'}
                        />
                    </div>
                    <div className='small-images-container'>
                        {image?.map((item, i) => (
                            <img
                                key={i}
                                src={urlFor(item)}
                                className={
                                    i === index
                                        ? 'small-image selected-image'
                                        : 'small-image'
                                }
                                onMouseEnter={() => setIndex(i)}
                                alt={'Selected image'}
                            />
                        ))}
                    </div>
                </div>

                <div className='product-detail-desc'>
                    <h1>{name}</h1>
                    <div className='reviews'>
                        <div>
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiFillStar />
                            <AiOutlineStar />
                        </div>
                        <p>(20)</p>
                    </div>
                    <h4>Details: </h4>
                    <p>{details}</p>
                    <p className='price'>
                        $
                        {price.toLocaleString('en-US', {
                            maximumFractionDigits: 2,
                            minimumFractionDigits: 2,
                        })}
                    </p>
                    per box of 12
                    <div className='quantity'>
                        <h3>Quantity:</h3>
                        <p className='quantity-desc'>
                            <span className='minus' onClick={decQty}>
                                <AiOutlineMinus />
                            </span>
                            <span className='num'>{qty}</span>
                            <span className='plus' onClick={incQty}>
                                <AiOutlinePlus />
                            </span>
                        </p>
                    </div>
                    <div className='sku'>SKU: {sku}</div>
                    <div className='buttons'>
                        <button
                            type='button'
                            className='add-to-cart'
                            onClick={() => onAdd(product, qty)}>
                            Add do Cart
                        </button>
                        <button
                            type='button'
                            className='buy-now'
                            onClick={handleByNow}>
                            Buy Now
                        </button>
                    </div>
                </div>
            </div>

            <Info
                ingredients={ingredients}
                weight={weight}
                delivery={delivery}
            />

            <div className='maylike-products-wrapper'>
                <h2>You may also like</h2>
                <div className='marquee'>
                    <div className='maylike-products-container track'>
                        {products.map(item => (
                            <Product key={item._id} product={item} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export const getStaticPaths = async () => {
    const query = `*[_type == "product"] {
    slug {
      current
    }
  }
  `;

    const products = await client.fetch(query);

    const paths = products.map(product => ({
        params: {
            slug: product.slug.current,
        },
    }));

    return {
        paths,
        fallback: 'blocking',
    };
};

export const getStaticProps = async ({ params: { slug } }) => {
    const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
    const productsQuery = '*[_type == "product"]';

    const product = await client.fetch(query);
    const products = await client.fetch(productsQuery);

    return {
        props: { products, product },
    };
};

export default ProductDetails;
