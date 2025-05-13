import { useTab } from '@/contexts/TabContext';
import { X } from 'lucide-react';
import {
  DndContext,
  closestCenter,
  useSensor,
  useSensors,
  PointerSensor,
  KeyboardSensor,
} from '@dnd-kit/core';
import { SortableContext, useSortable, horizontalListSortingStrategy, sortableKeyboardCoordinates } from '@dnd-kit/sortable';
import { CSS } from '@dnd-kit/utilities';

export default function Tabs() {
  const { openTabs, activeTab, setActiveTab, closeTab, setOpenTabs } = useTab();
  
  const sensors = useSensors(
    useSensor(PointerSensor, {
      activationConstraint: {
        distance: 5, // 👈 drag only triggers if you move 5px+
      },
    }),
    useSensor(KeyboardSensor, { coordinateGetter: sortableKeyboardCoordinates })
  );

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over.id) {
      const oldIndex = openTabs.findIndex((tab) => tab.id === active.id);
      const newIndex = openTabs.findIndex((tab) => tab.id === over.id);
      const updatedTabs = [...openTabs];
      const [moved] = updatedTabs.splice(oldIndex, 1);
      updatedTabs.splice(newIndex, 0, moved);
      setOpenTabs(updatedTabs);
    }
  };

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={openTabs.map((tab) => tab.id)} strategy={horizontalListSortingStrategy}>
        <div
          style={{
            display: 'flex',
            backgroundColor: '#1E1E1E',
            height: '30px',
            fontSize: '15px',
            border: 'none',
          }}
        >
          {openTabs.map((tab) => (
            <SortableTab
              key={tab.id}
              id={tab.id}
              name={tab.name}
              isActive={activeTab?.id === tab.id}
              onClick={() => setActiveTab(tab)}
              onClose={() => closeTab(tab.id)}
            />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}

function SortableTab({ id, name, isActive, onClick, onClose }: any) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style: React.CSSProperties = {
    transform: CSS.Transform.toString(transform),
    transition,
    display: 'flex',
    alignItems: 'center',
    padding: '0 12px',
    cursor: 'pointer',
    borderBottom: isActive ? '2px solid #0078D4' : '2px solid transparent',
    height: '100%',
    backgroundColor: '#1E1E1E',
    color: isActive ? '#FFFFFF' : '#D9D9D9',
    userSelect: 'none',
    marginRight: '2px',
  };

  return (
    <div
      ref={setNodeRef}
      style={style}
      {...attributes}
      {...listeners} // 👈 attach listeners to the entire tab
      onClick={(e) => {
        onClick();
      }}
    >
      <span>{name}</span>
      {isActive && (
        <X
          size={14}
          style={{ marginLeft: '8px', cursor: 'pointer' }}
          onClick={(e) => {
            e.stopPropagation();
            onClose();
          }}
        />
      )}
    </div>
  );
}
