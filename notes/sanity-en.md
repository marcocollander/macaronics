# Getting Started with Sanity

Installing and setting up Sanity is a multistep process; there are a few things we have to do. We'll cover all of these
step by step, but at high level, here is a list of what needs to happen

-   Install Sanity
-   Log in authenticate with Sanity
-   Create a data store (i.e., database) for storing our products
-   Configure the database
-   Add products to the database, ready for use

Although I will take you through the installation process, we will only to be able touch briefly on how Sanity works;
you might do well to look at the documentation on the main website if you want to learn more about the product at a
later date

> The main documentation for Sanity is hosted at www.sanity.io/docs, or you can access it from the command line (see
> later in this chapter)

Before we get started, there are a couple of assumptions we need to be aware of which will affect the installation
process:

-   We'll be working out of a folder called sanity, stored at the root of our project folder
-   You have a working email address you want to use for logging into Sanity. (There are other ways to log to Sanity, but
    this is probably the easiest)

There is one crucial point I also need to cover: although we are installing Sanity, this is only to host data.
Administering our account/Sanity setup is done remotely via the dashboard in our account on the Sanity website. Keep
this
thought in mind as we install Sanity as part of the next exercise.

## Installing Sanity

Installing Sanity is very easy - it's written for Node/NPM, so it will use a reasonably familiar process, at least for
those who use Node.js. Everything is done via command line, so you will need to have installed Node.js and NPM first;
assuming you have done so ( or already had it installed), let's continue with the setup process
