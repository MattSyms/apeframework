#! /bin/bash

#
# Usage: ./bin/test.sh [<module> (unit|<adapter>) <stack> [options]]
#
#   Test all modules:
#     ./bin/test.sh
#
#   Test one module:
#     ./bin/test.sh api unit node
#     ./bin/test.sh mailer smtp maildev
#

test() {
  local module=$1
  local adapter=$2
  local stack="stack/$3/docker-compose.yml"
  local options=${@:4}

  printf "⚫ TEST module=$1 adapter=$2 stack=$3"
  if [ ! -z $options ]; then
    printf " options=$4\n"
  else
    printf "\n"
  fi

  docker compose -f $stack run \
    --quiet-pull \
    --env MODULE=$module \
    --env ADAPTER=$adapter \
    node yarn test

  status=$?

  docker compose -f $stack down \
    --remove-orphans \
    --volumes \
    --timeout 0

  if [ $status != 0 ]; then
    exit 1
  fi

  sleep 1
}

module=$1
adapter=$2
stack=$3
options=${@:4}

if [ ! -z $module ]; then
  if [ -z $adapter ]; then
    echo 'missing argument <adapter>'
    exit 1
  fi
  if [ -z $stack ]; then
    echo 'missing argument <stack>'
    exit 1
  fi
  test $module $adapter $stack $options
else
  test cipher unit node
  test cli unit node
  test config unit node
  test env unit node
  test error unit node
  test jwt unit node
  test logger unit node
  test logger noop node
  test mailer unit node
  test mailer noop node
  test parser unit node
  test pwd unit node
  test server unit node
  test tls unit node
  test utils unit node
fi
