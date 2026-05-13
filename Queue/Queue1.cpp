#include <iostream>
using namespace std;

struct node
{
    int data;
    struct node *next;
};

typedef struct node NODE;
typedef struct node *PNODE;

class Queue
{
public:
    PNODE first;
    int iCount;

   Queue()
    {
        cout << "Objects ofQueue gets created :" << "\n";
        first = NULL;
        iCount = 0;
    }

    void Enqueue(int no)
    {
        PNODE newn = NULL;
        PNODE temp = NULL;

        newn = new NODE;

        newn->data = no;
        newn->next = NULL;

        if (first == NULL)
        {
            first = newn;
        }
        else
        {
            temp = first;

            while (temp->next != NULL)
            {
                temp = temp->next;
            }

            temp->next = newn;
        }
        iCount++;
    }

    void Dequeue()
    {
        PNODE temp = NULL;

        if (first == NULL)
        {
            return;
        }
        else if ((first)->next == NULL)
        {
            delete (first);
            first = NULL;
        }
        else
        {
            temp = (first);

            (first) = (first)->next;

            delete (temp);
        }

        iCount--;
    }

    void Display()
    {
        PNODE temp = NULL;

        temp = first;

        while (temp != NULL)
        {
            cout << "| " << temp->data << " |";
            temp = temp->next;
        }

        cout << "\n";
    }

    int Count()
    {
        return iCount;
    }

    int Peek()
    {
        int iValue = 0;

        PNODE temp = NULL;

        temp = first;

        if (temp == NULL)
        {
            printf("Queue is empty :");
            return -1;
        }

        iValue = temp->data;

        return iValue;
    }
};

int main()
{
   Queue obj;

    int iRet = 0;

    obj.Enqueue(51);
    obj.Enqueue(41);
    obj.Enqueue(31);
    obj.Enqueue(21);
    obj.Enqueue(11);

    obj.Display();

    iRet = obj.Count();

    cout << "Number of nodes are :" << iRet << "\n";

    obj.Dequeue();

    obj.Display();

    iRet = obj.Count();

    cout << "Number of nodes are :" << iRet << "\n";

    iRet = obj.Peek();

    cout << "Top Node From Queue is :" << iRet << "\n";

    return 0;
}