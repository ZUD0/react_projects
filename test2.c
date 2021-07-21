#include<stdio.h>
#include<string.h>
int main(void){
    char name[20];
    printf("Enter the name");
    gets(name);
    printf("The size of the name is %d", strlen(name));
}