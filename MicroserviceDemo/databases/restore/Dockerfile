FROM alpine AS unzip
WORKDIR /src
RUN apk add --no-cache unzip
COPY /databases/MsDemo_Identity.zip .
COPY /databases/MsDemo_ProductManagement.zip .
RUN unzip -q "*.zip"

FROM mcr.microsoft.com/mssql-tools AS restore
WORKDIR /src
COPY --from=unzip /src/MsDemo_Identity.bak .
COPY --from=unzip /src/MsDemo_ProductManagement.bak .
COPY /databases/restore/entrypoint.sh .
RUN /bin/bash -c "sed -i $'s/\r$//' entrypoint.sh"
RUN chmod +x ./entrypoint.sh
ENTRYPOINT [ "./entrypoint.sh" ]