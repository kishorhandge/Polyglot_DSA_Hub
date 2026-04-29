
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

class DoublyCL
{
    public int iCount;
    public node first;
    public node last;

    DoublyCL() 
    {
        System.out.println("Object of DoublyCL gets created :");
        iCount = 0;
        first = null;
        last = null;
    }

    public void InsertFirst(int no)
    {
        node newn = null;

        newn = new node(no);

        if ((first == null) && (last == null))
        {
            first = newn;
            last = newn;
        }
        else
        {
            newn.next = first;
            first.prev = newn;
            first = newn;
        }

        last.next = first;
        first.prev = last;

        iCount++;
    }
    public void InsertLast(int no)
    {
        node newn = null;

        newn = new node(no);

        if ((first == null) && (last == null))
        {
            first = newn;
            last = newn;
        }
        else
        {
            last.next = newn;
            newn.prev = last;

            last = newn;
        }

        last.next = first;
        first.prev = last;

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

       do
        {
            System.out.print("| "+temp.data+" |<=>");
            temp = temp.next;

        }while(temp != last.next);

        System.out.println();
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


class DoublyCL1 
{
    public static void main(String A[])
    {
        DoublyCL obj = new DoublyCL();

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
