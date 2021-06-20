# docker_webUI
First of all u will need to allow your apache the root privilege to access the docker commands by:
cd /etc/group and then attach apache user to docker group
now go to cd /etc/sudoers and then add a rule

apache     ALL=(ALL)        NOPASSWD: ALL


now allow selinux to permit docker access or use command: setenforce 0
allow firewall to run httpd command  or you can use systemctl stop firewalld
