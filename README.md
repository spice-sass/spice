Spice sass library
=====================

A library of sass mixins for the modern web. If you need it... @include it!

## Installation

Spice is available as a npm package, a bower component or zip download.

##### npm

> npm install spice-sass

##### Bower

> bower install spice-sass


## Dependencies

##### Sass 3.3

@includes uses sass maps so sass version 3.3+ is required. See below for instructions on installing sass.

**Linux**

If you're using a distribution of Linux, you'll need to install Ruby first. You can install Ruby through the apt package manager, rbenv, or rvm.

> sudo su -c "gem install sass"

**Windows**

Before you start using Sass you will need to install Ruby. The fastest way to get Ruby on your Windows computer is to use [Ruby Installer.](http://rubyinstaller.org/) It's a single-click installer that will get everything set up for you super fast.

The installer will also install a Ruby command line powershell application that will let you use the Ruby libraries.

**Mac**

If you prefer the command line over an application then getting Sass set up is a fairly quick process. Sass has a Ruby dependency but if you're using a Mac, congratulations, Ruby comes pre-installed.

**Install Sass**

1.  **Open your Terminal or Command Prompt.** On the Mac the Terminal.app comes installed by default. It's located in your "Utilities" folder. On Windows, run `cmd`.

2.  **Install Sass.** Ruby uses Gems to manage its various packages of code like Sass. In your open terminal window type:

    > gem install sass

    This will install Sass and any dependencies for you. It's pretty magical. If you get an error message then it's likely you will need to use the <span class="higlight">sudo</span> command to install the Sass gem. It would look like:

    > sudo gem install sass

3.  **Double-check.** You should now have Sass installed, but it never hurts to double-check. In your terminal application you can type:

    > sass -v

    It should return <span class="highlight">Sass 3.4.15</span>. Congratulations! You've successfully installed Sass.

