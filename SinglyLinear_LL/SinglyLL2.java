
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

class SinglyLL
{
    public int iCount;
    public node first;

    SinglyLL() 
    {
        System.out.println("Object of singlyll gets created :");
        iCount = 0;
        first = null;
    }

    public void InsertFirst(int no)
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
    public void InsertLast(int no)
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
    public void DeleteFirst()
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
    public void DeleteLast()
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

            while(temp.next != null)
            {
                temp = temp.next;
            }

            temp.next = null;
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
            System.out.print("| "+temp.data+" |->");
            temp = temp.next;
        }
        System.out.println("null");
    }
    public int Count()
    {
        return iCount;
    }
    public void InsertAtPos(int no,int pos)
    {
        
    }

    public void DeleteAtPos(int no,int pos)
    {

    }

}


class SinglyLL2
{
    public static void main(String A[])
    {
        SinglyLL obj = new SinglyLL();

        int iRet = 0;

        obj.InsertFirst(51);
        obj.InsertFirst(41);
        obj.InsertFirst(31);
        obj.InsertFirst(21);
        obj.InsertFirst(11);

        obj.Display();

        iRet = obj.Count();

        System.out.println("Number of nodes are :"+iRet);

        obj.InsertLast(101);
        obj.InsertLast(111);

        obj.Display();

        iRet = obj.Count();

        System.out.println("Number of nodes are :"+iRet);

        obj.DeleteFirst();

        obj.Display();

        iRet = obj.Count();

        System.out.println("Number of nodes are :"+iRet);

        obj.DeleteLast();

        obj.Display();

        iRet = obj.Count();

        System.out.println("Number of nodes are :"+iRet);


    }
}
