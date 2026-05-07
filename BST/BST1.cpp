#include <iostream>
using namespace std;

struct node
{
    int data;
    struct node *lchild;
    struct node *rchild;
};
typedef struct node NODE;
typedef struct node *PNODE;

class BST
{
public:
    PNODE first;
    int iCount;

    BST()
    {
        cout << "Object of BST gets created :" << "\n";
        first = NULL;
        iCount = 0;
    }

    void Insert(int no)
    {
        PNODE newn = NULL;
        PNODE temp = NULL;

        newn = new NODE;

        newn->data = no;
        newn->lchild = NULL;
        newn->rchild = NULL;

        if (first == NULL)
        {
            first = newn;
        }
        else
        {
            temp = first;

            while (1)
            {
                if (no < temp->data)
                {
                    if (temp->lchild == NULL)
                    {
                        temp->lchild = newn;
                        break;
                    }

                    temp = temp->lchild;
                }
                else if (no > temp->data)
                {
                    if (temp->rchild == NULL)
                    {
                        temp->rchild = newn;
                        break;
                    }

                    temp = temp->rchild;
                }
                else if (no == temp->data)
                {
                    cout << "Unable to insert as element is dupliacte:" << "\n";
                    delete (newn); // IMP
                    break;
                }
            }
        }
    }

    void Inorder(PNODE temp)
    {   
         
        if (temp != NULL)
        {
            Inorder(temp->lchild);
            cout<< temp->data << " ";
            Inorder(temp->rchild);
        }
    }
    void Preorder(PNODE temp)
    {   
         
        if (temp != NULL)
        {
            cout<< temp->data << " ";
            Preorder(temp ->lchild);
            Preorder(temp ->rchild);
        }
    }
    void Postorder(PNODE temp)
    {   

        if (temp != NULL)
        {
            Postorder(temp ->lchild);
            Postorder(temp ->rchild);
            cout<< temp->data << " ";
        }
    }
};

int main()
{   
    PNODE head;

    BST bobj;

    bobj.Insert(51);
    bobj.Insert(41);
    bobj.Insert(31);
    bobj.Insert(21);
    bobj.Insert(11);

    cout<<"Inorder traversal:"<<"\n";
    bobj.Inorder(bobj.first);
    cout << "\n";

    cout<<"Preorder traversal:"<<"\n";
    bobj.Preorder(bobj.first);
    cout << "\n";

    cout<<"Postorder traversal:"<<"\n";
    bobj.Postorder(bobj.first);
    cout << "\n";

    return 0;
}