FROM debian:stable-slim
WORKDIR /frontend

RUN apt-get update && apt-get install -y \
    curl \
    zip \
    unzip \
    git \
 && apt-get clean \
 && rm -rf /var/lib/apt/lists/*

RUN curl -fsSL https://deno.land/x/install/install.sh | sh
ENV DENO_INSTALL="/root/.deno"
ENV PATH="$DENO_INSTALL/bin:$PATH"

ENTRYPOINT ["deno", "task", "start"]

# 参考：https://qiita.com/suzuki_sh/items/c49b6e3cadddf5df7439