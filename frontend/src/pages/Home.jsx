import { DisplayTodos } from "../components/DisplayTodos";
import { SearchBar } from "../components/AddBar";
import { useTaskApiContext } from "../components/providers/TaskApiContext";

export const Home = () => {
  const { tasks } = useTaskApiContext();

  return (
    <div className='flex h-screen w-screen items-center justify-center bg-slate-200'>
      <div className='fixed overflow-y-auto no-scrollbar flex h-3/4 w-1/2 justify-center rounded-xl bg-blue-200'>
        <div className='items-top flex flex-1 flex-col gap-5 p-5'>
          <h1 className='text-2xl font-extrabold'>Todo-List</h1>
          <SearchBar />
          {tasks.map((e) => (
            <DisplayTodos key={e._id} id={e._id} task={e.task} />
          ))}
        </div>
      </div>
    </div>
  );
};
