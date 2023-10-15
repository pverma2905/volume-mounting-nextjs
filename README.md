1)docker build -t next1_image .
2)docker run -it -d -p 3000:3000 -v .:/home/next1 --name next_cont1 next1_image:latest
