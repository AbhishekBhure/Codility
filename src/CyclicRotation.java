

public class CyclicRotation {
    public static int[] solution(int[] A, int K) {
        for (int i = 0; i < K; i++) {
            int lastValue = A[A.length - 1];
            for (int j = (A.length - 2); j >= 0; j--) {
                A[j+1] =A[j];

            }

            A[0]=lastValue;
        }
        return A;
    }

    public static void main(String args[]) {
        CyclicRotation CR = new CyclicRotation();
        int[] result = (CR.solution(new int[]{1,2,3,4}, 2 ));
        for(int i : result){
            System.out.println(i + "");
        }
    }
}
