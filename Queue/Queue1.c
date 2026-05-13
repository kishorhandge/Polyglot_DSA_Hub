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

void Enqueue(PPNODE first,int no)
{
    PNODE newn = NULL;
    PNODE temp = NULL;

    newn  = (PNODE)malloc(sizeof(NODE));

    newn->data = no;
    newn->next = NULL;

    if(*first == NULL)
    {
        *first = newn;
    }
    else
    {
        temp = *first;

        while(temp->next != NULL)
        {
            temp = temp->next;
        }

        temp->next = newn;
    }
}
 
void Dequeue(PPNODE first)
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
        printf("| %d |",first->data);
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

int Peek(PNODE first)
{
    int iValue = 0;

    if(first == NULL)
    {
        printf("Queue is empty :");
        return -1;
    }

    iValue = first->data;

    return iValue;
}


int main()
{
    PNODE head = NULL;
    int iRet = 0;

    Enqueue(&head,51);
    Enqueue(&head,41);
    Enqueue(&head,31);
    Enqueue(&head,21);
    Enqueue(&head,11);

    Display(head);

    iRet = Count(head);

    printf("Number of nodes in given Queue is : %d\n",iRet);

    Dequeue(&head);

    Display(head);

    iRet = Count(head);

    printf("Number of nodes in given Queue is : %d\n",iRet);

    iRet = Peek(head);

    printf("Top node from Queue is :%d\n",iRet);

    return 0;
}