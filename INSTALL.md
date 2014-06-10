# Installation

These installation instructions will assume you are running Mac OS X. If you
are running a Linux distribution you can adapt these instructions accordingly.

## Install dependencies

* VirtualBox 4.3.12
* Vagrant 1.6.2
* docker 1.0.0 & boot2docker 1.0.0 (https://github.com/boot2docker/osx-installer)
* fig 0.4.1 (http://orchardup.github.io/fig/install.html)

## Add hosts entry

Append the following line to `/etc/hosts`:

    10.1.1.51 dev-learn2d.com

## Initialize VMs

### Initialize the CoreOS/Docker VM with Vagrant

    cd coreos
    vagrant up

### Build Docker images

    fig build

### Boot up Docker containers

    fig start

### Attach to frontend standard output

    fig logs frontend

## Open the website in a web browser

Navigate a web browser to `http://dev-learn2d.com` and interact with the
application.
