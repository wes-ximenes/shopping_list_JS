CREATE TABLE products (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    display_order INTEGER NOT NULL,
    active BOOLEAN DEFAULT TRUE
);

CREATE TABLE shopping_lists (
    id SERIAL PRIMARY KEY,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    finished_at TIMESTAMP
);

CREATE TABLE shopping_list_items (
    id SERIAL PRIMARY KEY,
    shopping_list_id INTEGER NOT NULL,
    product_id INTEGER NOT NULL,
    purchased BOOLEAN DEFAULT FALSE,

    CONSTRAINT fk_shopping_list
        FOREIGN KEY (shopping_list_id)
        REFERENCES shopping_lists(id)
        ON DELETE CASCADE,

    CONSTRAINT fk_product
        FOREIGN KEY (product_id)
        REFERENCES products(id)
);