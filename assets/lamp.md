# Guia Completo: Instalar Apache, PHP, Nginx e MySQL no Debian/Ubuntu

Este guia mostra como configurar um ambiente web completo (LAMP + Nginx) no Debian e derivados.

**LAMP** é um acrônimo que representa uma pilha de software de código aberto amplamente utilizada para desenvolver e hospedar aplicações web dinâmicas, composta por Linux (sistema operacional), Apache (servidor web), MySQL (sistema de gerenciamento de banco de dados) e PHP (linguagem de programação). 

O **NGINX** é um servidor web de código aberto, criado por Igor Sysoev em 2004, conhecido por sua alta performance, baixo consumo de recursos e capacidade de lidar com milhares de conexões simultâneas graças à sua arquitetura assíncrona e orientada a eventos.  Além de servir conteúdo estático, atua como proxy reverso, balanceador de carga, cache HTTP e servidor de proxy de e-mail, sendo amplamente utilizado por empresas como Netflix, Google e WordPress.  Sua configuração flexível e escalabilidade o tornam uma escolha estratégica para aplicações de alto tráfego e infraestruturas modernas. 

## Atualizando o sistema

Antes de tudo, atualize os pacotes:

```bash
sudo apt update && sudo apt upgrade -y
```

# Instalando o Apache

O Apache é um dos servidores web mais usados.

### Instalação

```bash
sudo apt install apache2 -y
```

### Verificando o status

```bash
sudo systemctl status apache2
```

Se estiver rodando, acesse no navegador:

```
http://localhost
```

---

# Instalando o PHP

### Instalação básica

```bash
sudo apt install php libapache2-mod-php php-mysql -y
```

### Verificando a versão

```bash
php -v
```

### Testando o PHP no Apache

Crie um arquivo:

```bash
sudo nano /var/www/html/info.php
```

Conteúdo:

```php
<?php phpinfo(); ?>
```

Acesse:

```
http://localhost/info.php
```

### Instalação do MySQL no Debian

### 1. Baixar e Instalar o Repositório MySQL

```bash
wget https://dev.mysql.com/get/mysql-apt-config_0.8.30-1_all.deb
sudo dpkg -i mysql-apt-config_0.8.30-1_all.deb
```
**Nota:** Durante a instalação, selecione a versão do MySQL (ex: MySQL 8.0) na interface gráfica.

### 2. Instalar o Servidor MySQL
```bash
sudo apt update
sudo apt install mysql-server
```
O instalador solicitará uma senha segura para o usuário `root`.

### 3. Executar Script de Segurança
```bash
sudo mysql_secure_installation
```
Responda `Yes` (Sim) para todas as opções para maior segurança.

### 4. Iniciar e Habilitar o Serviço
```bash
sudo systemctl start mysql.service
sudo systemctl enable mysql.service
```

### 5. Conectar ao MySQL
```bash
mysql -u root -p
```

# Instalando o Nginx

O Nginx pode ser usado como alternativa ao Apache ou como proxy reverso.

### Instalação

```bash
sudo apt install nginx -y
```

### Verificando status

```bash
sudo systemctl status nginx
```

Acesse:

```
http://localhost
```

# Apache vs Nginx (Porta 80)

Apache e Nginx usam a mesma porta (80). Você não pode rodar ambos diretamente sem configuração extra.

### Opção 1: Parar Apache

```bash
sudo systemctl stop apache2
```

### Opção 2: Parar Nginx

```bash
sudo systemctl stop nginx
```

# Usando Nginx + PHP (PHP-FPM)

Se quiser usar Nginx com PHP:

### Instalar PHP-FPM

```bash
sudo apt install php-fpm -y
```

### Configurar Nginx

Edite:

```bash
sudo nano /etc/nginx/sites-available/default
```

Procure por:

```nginx
index index.html index.htm;
```

Altere para:

```nginx
index index.php index.html index.htm;
```

E adicione:

```nginx
location ~ \.php$ {
    include snippets/fastcgi-php.conf;
    fastcgi_pass unix:/var/run/php/php8.2-fpm.sock;
}
```

> Ajuste a versão do PHP se necessário.

### Reiniciar serviços

```bash
sudo systemctl restart nginx
sudo systemctl restart php8.2-fpm
```

# Liberando Firewall (UFW)

Se estiver usando firewall:

```bash
sudo ufw allow 'Apache Full'
sudo ufw allow 'Nginx Full'
```

# Estrutura padrão de diretórios

| Serviço       | Diretório padrão |
| ------------- | ---------------- |
| Apache        | /var/www/html    |
| Nginx         | /var/www/html    |
| Config Apache | /etc/apache2     |
| Config Nginx  | /etc/nginx       |


# Conclusão

Agora você tem um ambiente completo com:

* Apache (servidor web)
* Nginx (alternativa/proxy)
* PHP (linguagem backend)
* MySQL (banco de dados)

Perfeito para rodar aplicações como WordPress, Laravel, ou sistemas próprios.


