#include <stdio.h>
#include <string.h>

int lastSpace(char *);

int main(void)
{
    int i, j = 2;
    char name[20], shortenedName[20];
    printf("Enter the name: ");
    gets(name);
    int lastSpacePosition = lastSpace(name);
    shortenedName[0] = name[0];
    shortenedName[1] = '.';
    for (i = 2; i < strlen(name); i++)
    {
        if (name[i] == ' ' && i < lastSpacePosition)
        {
            shortenedName[j++] = name[i + 1];
            shortenedName[j++] = '.';
        }
        else if(i>lastSpacePosition){
            shortenedName[j++] = name[i];
        }
    }
    for (i = 0; i <j; i++)
    {
        printf("%c", shortenedName[i]);
    }
}

int lastSpace(char *name)
{
    int i, last = 0;
    for (i = 0; i < strlen(name); i++)
    {
        if (name[i] == ' ')
        {
            last = i;
        }
    }
    return last;
}