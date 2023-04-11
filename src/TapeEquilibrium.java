public class TapeEquilibrium {

    public int solution(int[] A){
        int SumLeft=0;
        int SumRight = 0;
        int bestValue;
        for (int i = 0; i < A.length; i++)
        {
            SumRight += A[i];
        }

        bestValue=SumRight;
        for(int i=0;i<A.length;i++)
        {
            SumLeft += A[i];
            SumRight-=A[i];
            if (Math.abs(SumLeft - SumRight) < bestValue)
            {
                bestValue = Math.abs(SumLeft - SumRight);
            }


        }

        return bestValue;
    }

    public static void main(String args[]) {
        TapeEquilibrium TE = new TapeEquilibrium();
        System.out.println(TE.solution(new int[]{3,1,2,4,3}));
    }
}
