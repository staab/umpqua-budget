CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

CREATE TABLE account (
  id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  phone varchar(255),
  notification_pref varchar(255),
  plaid_item_id text NOT NULL,
  plaid_access_token text NOT NULL
);

CREATE TABLE budget (
  id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  account uuid NOT NULL,
  name varchar(255) NOT NULL,
  type varchar(255) NOT NULL,
  amount decimal(9, 2)
);

CREATE TABLE category (
  id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  name varchar(255),
  budget uuid NOT NULL
);

CREATE TABLE tag (
  id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  name varchar(255),
  category uuid NOT NULL
);

CREATE TABLE transaction (
  id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  account uuid NOT NULL,
  plaid_name varchar(255) NOT NULL,
  plaid_date timestamp NOT NULL,
  plaid_amount decimal(9, 2) NOT NULL,
  plaid_category jsonb NOT NULL,
  plaid_transaction_id varchar(255) NOT NULL
);

CREATE TABLE entry (
  id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,
  transaction uuid NOT NULL,
  name varchar(255) NOT NULL,
  amount decimal(9, 2) NOT NULL,
  tags jsonb NOT NULL DEFAULT '{}'::jsonb,
  ignore boolean NOT NULL DEFAULT false
);

ALTER TABLE budget ADD CONSTRAINT "fk_account" FOREIGN KEY ("account") REFERENCES "account" DEFERRABLE;
ALTER TABLE category ADD CONSTRAINT "fk_budget" FOREIGN KEY ("budget") REFERENCES "budget" DEFERRABLE;
ALTER TABLE tag ADD CONSTRAINT "fk_category" FOREIGN KEY ("category") REFERENCES "category" DEFERRABLE;
ALTER TABLE transaction ADD CONSTRAINT "fk_account" FOREIGN KEY ("account") REFERENCES "account" DEFERRABLE;
ALTER TABLE entry ADD CONSTRAINT "fk_transaction" FOREIGN KEY ("transaction") REFERENCES "transaction" DEFERRABLE;
