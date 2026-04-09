# Revivendo um Notebook Antigo com Linux Mint

Você tem um notebook antigo encostado, juntando poeira e já considerado “lento demais” para os padrões atuais? Antes de pensar em descartá-lo, saiba que é totalmente possível dar uma nova vida a esse equipamento usando um sistema operacional leve e eficiente: o Linux Mint.

## Por que seu notebook ficou lento?

Com o passar do tempo, sistemas como Windows tendem a exigir cada vez mais recursos — mais memória, mais processamento, mais armazenamento. Isso faz com que máquinas mais antigas sofram para acompanhar atualizações e softwares modernos.

Mas aqui vai a boa notícia: o problema nem sempre é o hardware, e sim o sistema operacional.

## O que é o Linux Mint?

O (Linux Mint)[https://www.linuxmint.com/] é uma distribuição Linux conhecida por ser leve, estável e muito amigável para iniciantes. Ele oferece uma interface moderna e intuitiva, semelhante ao Windows, o que facilita bastante a adaptação.

Além disso, ele consome bem menos recursos do que sistemas tradicionais, sendo ideal para computadores mais antigos.

## Benefícios de usar Linux Mint 

* Ele funciona imediatamente, com suporte multimídia completo e é extremamente fácil de usar.
* É gratuito e de código aberto.
* É conduzido pela comunidade. Os usuários são incentivados a enviar feedback ao projeto para que suas ideias possam ser usadas para melhorar o Linux Mint.
* Baseado em Debian e Ubuntu, ele fornece cerca de 30.000 pacotes e um dos melhores gerenciadores de software.
* É seguro e confiável—graças às atualizações conservadoras de software, um gerenciador de atualizações exclusivo e sua arquitetura Linux robusta.
* O Linux Mint requer muito pouca manutenção (sem regressões, sem antivírus, sem anti-spyware...etc).

## Qual versão escolher?

Para notebooks antigos, o ideal é optar por versões mais leves do Linux Mint:

* **XFCE**: a mais leve, perfeita para máquinas com pouca RAM
* **MATE**: um equilíbrio entre desempenho e visual

Se seu notebook tem menos de 4GB de RAM, vá de XFCE sem medo.

## Criando um pendrive bootável do Linux Mint com Rufus

Faça o Download do rufus pelo site (https://rufus.ie/pt_BR/)[https://rufus.ie/pt_BR/]
Faça o Download do linux mint pelo site (https://www.linuxmint.com/)[https://www.linuxmint.com/]

* Abra o programa do rufus e selecione o dispositivo(pendrive)
// foto

* Selecionar o arquivo de ISO do linux mint
// foto

* Esquema de partição
Para instalar o Linux Mint em um PC antigo, a opção mais recomendada é utilizar o esquema de partição MBR e o sistema de arquivos FAT32, pois esses padrões garantem compatibilidade com BIOS antigas que não suportam UEFI ou GPT.

## Agora com o pendrive pronto vamos instalar o Linux Mint

1. Reinicie o notebook e entre no menu de boot geralmente apertando a tecla f2 ou f12 do teclado 
2. Inicie pelo pendrive

3. Live session 
Quando você inicializa o computador a partir do pendrive, o Linux Mint inicia um live session. Ele faz login automaticamente como um usuário chamado mintn e mostra uma área de trabalho com o instalador:live sessionmint
//foto

## Instalando o Linux Mint no computador
1. Clique duas vezes em Instalar Linux Mint. 
2. Selecione seu idioma.
3. Conecte-se à Internet.
4. Se você estiver conectado à Internet, marque a caixa para instalar os codecs multimídia.
5. Escolha um tipo de instalação.
Se o Linux Mint é o único sistema operacional que você deseja executar neste computador e todos os dados podem ser perdidos no disco rígido, escolha Apagar disco e instalar Linux Mint.
para mais informações de como realizar um dual boot ou escolher um tipo de particonamento do disco manual verifique a documentação no link [https://linuxmint-installation-guide.readthedocs.io/en/latest/install.html](https://linuxmint-installation-guide.readthedocs.io/en/latest/install.html)
6. Selecione seu fuso horário
7. Selecione o layout do seu teclado
8. Insira seus dados de usuário
Seu name pode ser seu nome verdadeiro, mas não precisa ser. Ele é usado apenas localmente, no protetor de tela e na tela de login.

Seu username é o que você faz login e seu hostname é o nome do seu computador na rede.

Para evitar bugs, use apenas caracteres minúsculos, sem pontuação ou acentuação.
Escolha uma senha forte.
* Quando a instalação estiver concluída, clique em Reinicie agora.
O computador começará então a desligar e solicitará que você remova o disco USB. Após a reinicialização, seu computador deverá mostrar um menu de inicialização ou iniciar seu sistema operacional Linux Mint recém-instalado.


## O que esperar depois da instalação?

Depois de instalado, você terá um sistema:

* Muito mais ágil
* Capaz de rodar navegador, vídeos, editores de texto e até alguns programas mais pesados
* Pronto para tarefas do dia a dia (estudos, trabalho, navegação, etc.)

## Conclusão

Tecnologia não precisa ser descartável. Com escolhas inteligentes, como a instalação de um sistema leve, você pode transformar um notebook antigo em uma ferramenta útil mais uma vez.

Se você nunca testou Linux antes, essa pode ser a oportunidade perfeita.

## Referencias 
[https://www.comoinstalar.com.br/pendrive-bootavel-como-usar-o-rufus/](https://www.comoinstalar.com.br/pendrive-bootavel-como-usar-o-rufus/)
[https://linuxmint-installation-guide.readthedocs.io/en/latest/install.html](https://linuxmint-installation-guide.readthedocs.io/en/latest/install.html)
