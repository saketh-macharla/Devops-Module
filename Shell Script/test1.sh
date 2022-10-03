
git pull origin master
javac /home/saketm/ShellTests/Lambdas/src/Lambdas/CreatingLambdas.java
if [ $? -ne 0 ]
then
	  python3 /home/saketm/ShellTests/quickstart.py unsuccessful
else
	python3 /home/saketm/ShellTests/quickstart.py successful
fi
