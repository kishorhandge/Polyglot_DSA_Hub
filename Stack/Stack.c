#include<stdio.h>
#include<stdlib.h>

struct node
{
    int data;
    struct node *next;
};

typedef struct node NODE;
typedef struct node *PNODE;
typedef struct node **PPNODE;

void Push(PPNODE first,int no)
{
    PNODE newn = NULL;

    newn  = (PNODE)malloc(sizeof(NODE));

    newn->data = no;
    newn->next = NULL;

    if(first == NULL)
    {
        *first = newn;
    }
    else
    {
        newn->next = *first;
        *first = newn;
    }
}
 
void Pop(PPNODE first)
{   
    PNODE temp = NULL;

    if(*first == NULL)
    {
        return;
    }
    else if((*first)->next == NULL)
    {   
        free(*first);
        *first = NULL;
    }
    else
    {
        temp = (*first);

        (*first) = (*first)->next;

        free(temp);
    }
}

void Display(PNODE first)
{
    while(first != NULL)
    {
        printf("| %d |\n",first->data);
        first = first->next;
    }

    printf("\n");
}

int Count(PNODE first)
{   
    int iCount = 0;

    while(first != NULL)
    {
        iCount++;
        first = first->next;
    }

    return iCount;
}

int Peep(PNODE first)
{
    int iValue = 0;

    if(first == NULL)
    {
        printf("Stack is empty :");
        return -1;
    }

    iValue = first->data;

    return iValue;
}


int main()
{
    PNODE head = NULL;
    int iRet = 0;

    Push(&head,51);
    Push(&head,41);
    Push(&head,31);
    Push(&head,21);
    Push(&head,11);

    Display(head);

    iRet = Count(head);

    printf("Number of nodes in given Stack is : %d\n",iRet);

    Pop(&head);

    Display(head);

    iRet = Count(head);

    printf("Number of nodes in given Stack is : %d\n",iRet);

    iRet = Peep(head);

    printf("Top node from Stack is :%d\n",iRet);

    return 0;
}