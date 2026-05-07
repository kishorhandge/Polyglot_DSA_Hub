#include <iostream>
using namespace std;

struct node
{
    int data;
    struct node *next;
};

typedef struct node NODE;
typedef struct node *PNODE;

class Stack
{
public:
    PNODE first;
    int iCount;

    Stack()
    {
        cout << "Objects of Stack gets created :" << "\n";
        first = NULL;
        iCount = 0;
    }

    void Push(int no)
    {
        PNODE newn = NULL;

        newn = new NODE;

        newn->data = no;
        newn->next = NULL;

        if (first == NULL)
        {
            first = newn;
        }
        else
        {
            newn->next = first;
            first = newn;
        }
        iCount++;
    }

    void Pop()
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
            cout << "| " << temp->data << " |\n";
            temp = temp->next;
        }

        cout << "\n";
    }

    int Count()
    {
        return iCount;
    }

    int Peep()
    {
        int iValue = 0;

        PNODE temp = NULL;

        temp = first;

        if (temp == NULL)
        {
            printf("Stack is empty :");
            return -1;
        }

        iValue = temp->data;

        return iValue;
    }
};

int main()
{
    Stack obj;

    int iRet = 0;

    obj.Push(51);
    obj.Push(41);
    obj.Push(31);
    obj.Push(21);
    obj.Push(11);

    obj.Display();

    iRet = obj.Count();

    cout << "Number of nodes are :" << iRet << "\n";

    obj.Pop();

    obj.Display();

    iRet = obj.Count();

    cout << "Number of nodes are :" << iRet << "\n";

    iRet = obj.Peep();

    cout << "Top Node From Stack is :" << iRet << "\n";

    return 0;
}