CREATE TABLE item_type(
   item_type_id  SERIAL PRIMARY KEY,
   type_name  character varying(255),
   date_of_entry timestamp without time zone DEFAULT now(),
  deleted integer DEFAULT 0
);


CREATE TABLE item_sub_type(
   item_sub_type_id  SERIAL PRIMARY KEY,
   item_type_id INTEGER,
   sub_type_name  character varying(255),
   date_of_entry timestamp without time zone DEFAULT now(),
  deleted integer DEFAULT 0,
  amount INTEGER
);

CREATE TABLE user_type(
   id  SERIAL PRIMARY KEY,
   name  character varying(255),
   deleted integer DEFAULT 0
);

CREATE TABLE users (
  id  SERIAL PRIMARY KEY,
  user_name character varying(255),
  user_type INTEGER,
  password character varying(255)
);

CREATE TABLE company (
  id SERIAL PRIMARY KEY,
  company_name character varying(255),
  phone character varying(255),
  address TEXT
);

CREATE TABLE patient_info (
   id  SERIAL PRIMARY KEY,
   name  character varying(255),
  mrd  character varying(255),
  title  character varying(255),
  address  character varying(255),
  phone  character varying(255),
  birthday timestamp without time zone,
  sex character varying(255)
);

CREATE TABLE patient_visit (
  id SERIAL PRIMARY KEY,
  patient_id INTEGER,
  diagnosis character varying(255),
  date_of_entry timestamp without time zone DEFAULT now()
);


CREATE TABLE bill_master (
  id SERIAL PRIMARY KEY,
  bill_name character varying(255),
   date_of_entry timestamp without time zone DEFAULT now(),
  deleted integer DEFAULT 0,
  amount integer
);


CREATE TABLE bill_details (
  id SERIAL PRIMARY KEY,
  bill_master_id INTEGER,
  item_type_id INTEGER,
  item_sub_type_id INTEGER,
  patient_id INTEGER,
  item_count INTEGER,
  bill_details_name character varying(255),
  date_of_entry timestamp without time zone DEFAULT now(),
  amount INTEGER
);

