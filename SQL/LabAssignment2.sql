create table branch(
    branch_name varchar(50) primary key,
    branch_city varchar(50),
    assets int
);

create table account(
    account_number int primary key,
    branch_name varchar(50),
    balance int,
    constraint fk_branch_name foreign key(branch_name) references branch(branch_name)
);

create table customer(
    customer_name varchar(50) primary key,
    customer_street varchar(50),
    customer_city varchar(50)
);

create table depositor(
    customer_name varchar(50),
    account_number int,
    constraint fk_account_name foreign key(account_number) references account(account_number)
);

create table loan(
    loan_number int primary key,
    branch_name varchar(50),
    amount int
);

create table borrower(
    customer_name varchar(50),
    loan_number int,
    constraint fk_customer_name foreign key (customer_name) references customer(customer_name),
    constraint fk_loan_number foreign key (loan_number) references loan(loan_number)
);

-- Insertion data queries in Branch Table
insert into
    branch(branch_name, branch_city, assets)
values
    (
        'Brighton',
        'Brooklyn',
        7100000
    ),
    (
        'Downtown',
        'Brooklyn',
        9000000
    ),
    (
        'Mianus',
        'Horseneck',
        9000000
    ),
    (
        'North Town',
        'Rye',
        9000000
    ),
    (
        'Perryridge',
        'Horseneck',
        9000000
    ),
    (
        'Pownal',
        'Bennington',
        9000000
    ),
    (
        'Redwood',
        'Palo Alto',
        9000000
    ),
    (
        'Round Hill',
        'Horseneck',
        80000000
    );
--Insertion Of Data Queries in Customer