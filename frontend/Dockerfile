# Learn2D Frontend
#
# VERSION 0.0.1

# Use the Ubuntu full base image from Phusion
FROM phusion/passenger-full:0.9.10
MAINTAINER Learn2D, Inc. <info@learn2d.com>

# Disable SSH
RUN rm -rf /etc/service/sshd /etc/my_init.d/00_regen_ssh_host_keys.sh

# Set correct environment variables
ENV HOME /home/app

# Use baseimage-docker's init process
CMD ["/sbin/my_init"]

# Base APT install
RUN apt-get update && apt-get install -y \
  git-core \
  libssl-dev \
  wget \
  apache2-utils \
  libxml2-dev \
  python \
  python2.7 \
  libpq-dev

# Clean up APT when done
RUN apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

# Install Node.js command-line tool: Bower
# Redirect to /dev/null to fix https://github.com/orchardup/fig/issues/212
RUN npm install -g bower@1.3.3 > /dev/null

# Create project directories on container
RUN mkdir /home/app/frontend

# Change current working directory to Node.js application
WORKDIR /home/app/frontend

# Copy npm package.json dependencies
ADD ./package.json /home/app/frontend/package.json

# Copy Bower bower.json dependencies
ADD ./bower.json /home/app/frontend/bower.json

# Install server application dependencies
# Redirect to /dev/null to fix https://github.com/orchardup/fig/issues/212
RUN npm install > /dev/null

# Install client application dependencies
RUN bower install --allow-root

# Launch application when launching the container
ENTRYPOINT ["/home/app/frontend/frontend-development.sh"]

# Run application as non-root user
USER app

# Expose HTTP port
EXPOSE 3000

# Copy application source
ADD . /home/app/frontend
