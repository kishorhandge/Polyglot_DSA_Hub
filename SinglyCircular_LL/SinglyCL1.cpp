#include <iostream>
using namespace std;

struct node
{
    int data;
    struct node *next;
};

typedef struct node NODE;
typedef struct node *PNODE;

class SinglyCL
{
public:
    PNODE first;
    PNODE last;
    int iCount;

    SinglyCL()
    {
        cout << "Objects of singlyCL gets created :" << "\n";
        first = NULL;
        last = NULL;
        iCount = 0;
    }

    void InsertFirst(int no)
    {
        PNODE newn = NULL;

        newn = new NODE;

        newn->data = no;
        newn->next = NULL;

        if ((first == NULL) && (last == NULL))
        {
            first = newn;
            last = newn;
        }
        else
        {
            newn->next = first;
            first = newn;
        }


        last->next = first;
        iCount++;
    }
    void InsertLast(int no)
    {
        PNODE newn = NULL;
        PNODE temp = NULL;

        newn = new NODE;

        newn->data = no;
        newn->next = NULL;

        if ((first == NULL) && (last == NULL))
        {
            first = newn;
            last = newn;
        }
        else
        {
            last->next = newn;
            last = newn;

        }

        last->next = first;
        iCount++;
    }
    void DeleteFirst()
    {
    }
    void DeleteLast()
    {
    }
    void Display()
    {
        PNODE temp = NULL;

        temp = first;

        do
        {
            cout << "| " << temp->data << " |=>";
            temp = temp->next;

        }while(temp != last->next);

        cout << "\n";
    }

    int Count()
    {
        return iCount;
    }

    void InsertAtPos(int no, int pos)
    {
    }

    void DeleteAtPos(int pos)
    {
    }
};

int main()
{
    SinglyCL obj;

    int iRet = 0;

    obj.InsertFirst(51);
    obj.InsertFirst(41);
    obj.InsertFirst(31);
    obj.InsertFirst(21);
    obj.InsertFirst(11);

    obj.Display();

    iRet = obj.Count();

    cout << "Number of nodes are :" << iRet << "\n";

    obj.InsertLast(101);
    obj.InsertLast(111);

    obj.Display();

    iRet = obj.Count();

    cout << "Number of nodes are :" << iRet << "\n";

    return 0;
}