default_swagger_url="http://badge-referrals-staging.herokuapp.com/swagger_doc.json"
swagger_url=${1:-$default_swagger_url}

mkdir -p build/tmp
mkdir -p build/artifacts

archive_link=`curl -vvv -X POST -H "content-type:application/json" -d '{"swaggerUrl":"'$swagger_url'"}' https://generator.swagger.io/api/gen/clients/javascript | jq -r .link`
curl -vvv $archive_link > build/tmp/javascript-client.zip

rm -rf docs src test .swagger-codegen .swagger-codegen-ignore .travis.yml git_push.sh mocha.opts package.json

unzip -o build/tmp/javascript-client.zip -d build/tmp

mv -f build/tmp/javascript-client/* build/tmp/javascript-client/.* .
