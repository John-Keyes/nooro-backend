args=("$@")
export $(egrep -v '#' .env | xargs)
DATE=$(date +%d%H%M)

db-start() {
  #cd database
  rm .mylogin.cnf
  printf "[client]\nhost=$DB_HOST\nuser=$DB_USER\npassword=$DB_PWD" >> .mylogin.cnf
  mysql --defaults-file=".mylogin.cnf" $DB_NAME
  #cd ..
}