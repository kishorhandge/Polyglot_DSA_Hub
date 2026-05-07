#include<stdio.h>
#include<stdlib.h>

struct node
{
    int data;
    struct node *lchild;
    struct node *rchild;
};

typedef struct node NODE;
typedef struct node *PNODE;
typedef struct node **PPNODE;

 
    void Insert(PPNODE first,int no)
    {
        PNODE newn = NULL;
        PNODE temp = NULL;

        newn = (PNODE)malloc(sizeof(NODE));

        newn->data = no;
        newn->lchild = NULL;
        newn->rchild = NULL;

        if(*first == NULL)
        {
            *first = newn;
        }
        else
        {
            temp = *first;

            while(1)
            {
                if(no < temp->data)
                {
                    if(temp->lchild == NULL)
                    {
                        temp->lchild = newn;
                        break;
                    }

                    temp = temp->lchild;
                }
                else if(no > temp->data)
                {
                    if(temp->rchild == NULL)
                    {
                        temp->rchild = newn;
                        break;
                    }

                    temp = temp->rchild;
                }
                else if(no == temp->data)
                {
                    printf("Unable to insert as element is dupliacte:\n");
                    free(newn);     //IMP
                    break;
                }
            }
        }
}

void Inorder(PNODE first)
{
    if(first != NULL)
    {   
        Inorder(first->lchild);
        printf("%d\n",first->data);
        Inorder(first->rchild);

    }
}
void Preorder(PNODE first)
{
    if(first != NULL)
    {   
        printf("%d\n",first->data);
        Preorder(first->lchild);
        Preorder(first->rchild);

    }
}
void Postorder(PNODE first)
{
    if(first != NULL)
    {   
        Postorder(first->lchild);
        Postorder(first->rchild);
        printf("%d\n",first->data);

    }
}

int main()
{
    PNODE head = NULL;

    Insert(&head,21);
    Insert(&head,11);
    Insert(&head,51);
    
    Insert(&head,11);

    printf("Inorder traversal:\n");
    Inorder(head);

    printf("Preorder traversal:\n");
    Preorder(head);

    printf("Postorder traversal:\n");
    Postorder(head);

    return 0;
}