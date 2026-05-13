
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

class QueueX
{
    public int iCount;
    public node first;

    QueueX() 
    {
        System.out.println("Object of Queue gets created :");
        iCount = 0;
        first = null;
    }

     public void Enqueue(int no)
    {
        node newn = null;
        node temp = null;

        newn = new node(no);

        newn.data = no;
        newn.next = null;

        if(first == null)
        {
            first = newn;
        }
        else
        {
            temp = first;
            
            while(temp.next != null)
            {
                temp = temp.next;
            }
            temp.next = newn;
        }
        iCount++;
    }
     
    public void Dequeue()
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
            System.out.print("| "+temp.data+" |");
            temp = temp.next;
        }
        System.out.println();
    }
    public int Count()
    {
        return iCount;
    }
    public int Peek()
    {
        int iValue = 0;

        node temp = null;

        temp = first;

        if(temp == null)
        {
            System.out.println("Queue is empty");
            return -1;
        }
        iValue = temp.data;

        return iValue;
    }

}


class Queue1
{
    public static void main(String A[])
    {
        QueueX obj = new QueueX();

        int iRet = 0;

        obj.Enqueue(51);
        obj.Enqueue(41);
        obj.Enqueue(31);
        obj.Enqueue(21);
        obj.Enqueue(11);

        obj.Display();

        iRet = obj.Count();

        System.out.println("Number of nodes are :"+iRet);

        obj.Dequeue();

        obj.Display();

        iRet = obj.Count();

        System.out.println("Number of nodes are :"+iRet);

        iRet = obj.Peek();

        System.out.println("Top Node From Stack is :"+iRet);

    }
}
