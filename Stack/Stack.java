
class node
{
    public int data;
    public node next;

    public node(int no)
    {
        data = no;
        next = null;
    }
}

class StackX
{
    public int iCount;
    public node first;

    StackX() 
    {
        System.out.println("Object of StackX gets created :");
        iCount = 0;
        first = null;
    }

    public void Push(int no)
    {
        node newn = null;

        newn = new node(no);

        newn.data = no;
        newn.next = null;

        if(first == null)
        {
            first = newn;
        }
        else
        {
            newn.next = first;
            first = newn;
        }
        iCount++;
    }
     
    public void Pop()
    {
        node temp = null;

        temp = first;

        if(first == null)
        {
            return;
        }
        else if(first.next == null)
        {
            first = null;
        }
        else
        {
            temp = first;

            first = first.next;
        }

        iCount--;

        System.gc();
    }
     

    public void Display()
    {
        node temp = null;

        temp = first;

        while(temp != null)
        {
            System.out.println("| "+temp.data+" |");
            temp = temp.next;
        }
        System.out.println();
    }
    public int Count()
    {
        return iCount;
    }
    public int Peep()
    {
        int iValue = 0;

        node temp = null;

        temp = first;

        if(temp == null)
        {
            System.out.println("Stack is empty");
            return -1;
        }
        iValue = temp.data;

        return iValue;
    }

}


class Stack
{
    public static void main(String A[])
    {
        StackX obj = new StackX();

        int iRet = 0;

        obj.Push(51);
        obj.Push(41);
        obj.Push(31);
        obj.Push(21);
        obj.Push(11);

        obj.Display();

        iRet = obj.Count();

        System.out.println("Number of nodes are :"+iRet);

        obj.Pop();

        obj.Display();

        iRet = obj.Count();

        System.out.println("Number of nodes are :"+iRet);

        iRet = obj.Peep();

        System.out.println("Top Node From Stack is :"+iRet);

    }
}
