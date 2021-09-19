Cloud computing
AWS for deploying our application

We need a OS and a machine
    select OS - select ubuntu under free tier
Click next next to move forward
Under Configure Secuirty Group
    open ports on which our server is running
        3000, anywhere
Then launch and also generate pem key (used for login/auth access)
then launch
    this will start the server

Now we need to install node in the virtual machine
    Once the machine starts running
    select the instance and click on connect button
    then move to ssh tab(helps to connect one system(say my laptop to remote machine))

Open an SSH client.
Locate your private key file. The key used to launch this instance is shahbaz.pem
Run this command, if necessary, to ensure your key is not publicly viewable.
 chmod 400 shahbaz.pem
Connect to your instance using its Public DNS:
 ec2-3-22-63-216.us-east-2.compute.amazonaws.com
Example:
 ssh -i "shahbaz.pem" ubuntu@ec2-3-22-63-216.us-east-2.compute.amazonaws.com

 Now install nvm, node
 https://tecadmin.net/how-to-install-nvm-on-ubuntu-20-04/

 then npx epxress-generator

 http://ec2-3-22-63-216.us-east-2.compute.amazonaws.com:3000/ - app hosted on aws server

