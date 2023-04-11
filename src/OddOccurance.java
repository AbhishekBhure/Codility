import java.util.Arrays;

public class OddOccurance {

    public int solution(int[] A){
        Arrays.sort(A);
        for(int i = 0; i < A.length; i = i+2){
            if(i == A.length-1)
                return A[i];

            if (A[i]!=A[i+1])
                return A[i];
        }
        return 0;
    }

    public static void main(String args[]) {
        OddOccurance CR = new OddOccurance();
        System.out.println(CR.solution(new int[]{5,2, 2, 3, 3,4,4}));

    }
}
