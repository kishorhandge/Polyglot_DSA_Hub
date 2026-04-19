
class node
{
    public int data;
    public node next;
    public node prev;

    public node(int no)
    {
        data = no;
        next = null;
        prev = null;
    }
}

class DoublyLL
{
    public int iCount;
    public node first;

    DoublyLL() 
    {
        System.out.println("Object of DoublyLL gets created :");
        iCount = 0;
        first = null;
    }

    public void InsertFirst(int no)
    {
        node newn = null;

        newn = new node(no);

        if(first == null)
        {
            first = newn;
        }
        else
        {
            newn.next = first;
            first.prev = newn;
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
        newn.prev = null;

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
            newn.prev = temp;
        }
        iCount++;
    }
    public void DeleteFirst()
    {

    }
    public void DeleteLast()
    {

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


class DoublyLL1 
{
    public static void main(String A[])
    {
        DoublyLL obj = new DoublyLL();

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


    }
}
